import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { parse } from 'yaml';
import { AreaFrontmatter, type AreaFrontmatter } from '../lib/content/area.schema';

const CONTENT_DIR = join(process.cwd(), 'content/area');
const OUTPUT_DIR = join(process.cwd(), 'app/(marketing)/areas');

// コマンドライン引数のパース
const args = process.argv.slice(2);
const isDryRun = process.env.DRY_RUN === '1' || args.includes('--list');
const isForce = process.env.FORCE === '1' || args.includes('--force');

async function generateMDX() {
  const validationErrors: Array<{ file: string; error: string }> = [];

  try {
    // content/area/*.yml を探索
    const files = await readdir(CONTENT_DIR);
    const yamlFiles = files.filter((f) => f.endsWith('.yml'));

    console.log(`Found ${yamlFiles.length} YAML file(s)`);

    for (const yamlFile of yamlFiles) {
      const slug = basename(yamlFile, '.yml');
      const yamlPath = join(CONTENT_DIR, yamlFile);
      const outputPath = join(OUTPUT_DIR, slug, 'page.mdx');

      try {
        // YAML読み込み・パース
        const yamlContent = await readFile(yamlPath, 'utf-8');
        const parsed = parse(yamlContent);

        // Zod検証
        const validated = AreaFrontmatter.parse(parsed);

        // MDX生成
        const mdxContent = generateMDXContent(validated, yamlFile);

        if (isDryRun) {
          // ドライラン: プレビュー表示のみ
          console.log(`\n${'='.repeat(60)}`);
          console.log(`Preview: ${outputPath}`);
          console.log(`${'='.repeat(60)}\n`);
          console.log(mdxContent);
          console.log(`\n${'='.repeat(60)}\n`);
          continue;
        }

        // 既存ファイルチェック
        try {
          await readFile(outputPath, 'utf-8');
          if (!isForce) {
            console.log(`SKIP (already exists): ${outputPath}`);
            continue;
          }
          console.log(`FORCE mode: overwriting ${outputPath}`);
        } catch {
          // ファイルが存在しない場合は続行
        }

        // ディレクトリ作成
        await mkdir(dirname(outputPath), { recursive: true });

        // ファイル書き込み
        await writeFile(outputPath, mdxContent, 'utf-8');
        console.log(`CREATED: ${outputPath}`);
      } catch (error) {
        // 検証エラーを収集
        const errorMessage = error instanceof Error ? error.message : String(error);
        validationErrors.push({ file: yamlFile, error: errorMessage });
        console.error(`❌ Validation failed: ${yamlFile}`);
        console.error(`   Error: ${errorMessage}`);
      }
    }

    // 検証エラーがある場合は非0で終了
    if (validationErrors.length > 0) {
      console.error('\n❌ Validation errors:');
      validationErrors.forEach(({ file, error }) => {
        console.error(`  - ${file}: ${error}`);
      });
      process.exit(1);
    }

    if (!isDryRun) {
      console.log('✅ Generation complete');
    } else {
      console.log('✅ Preview complete (no files written)');
    }
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

function generateMDXContent(data: AreaFrontmatter, sourceFile: string): string {
  const { title, locale, status, publishAt, tags, faq } = data;

  // FAQセクションを静的マークダウンで生成
  const faqSection = faq.length > 0
    ? `## FAQ\n\n${faq.map((item) => `### ${item.q}\n\n${item.a}\n`).join('\n')}`
    : '';

  return `"use client"

# ${title}

## Overview

Write your concise area summary here.

${faqSection}

## Request a Viewing

<a href="/viewing">Request a viewing</a>

{/* Generated from content/area/${sourceFile} */}
`;
}

generateMDX();