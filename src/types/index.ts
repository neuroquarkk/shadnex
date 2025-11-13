export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';
export type License = 'MIT' | 'Apache-2.0' | 'GPL-3.0' | 'BSD-3-Clause' | 'none';

export interface ProjectConfig {
  projectName: string;
  packageManager: PackageManager;
  typescript: 'yes' | 'no';
  eslint: 'yes' | 'no';
  tailwind: 'yes' | 'no';
  srcDir: 'yes' | 'no';
  appRouter: 'yes' | 'no';
  turbopack: 'yes' | 'no';
  importAlias: 'yes' | 'no';
  alias?: string;
  shadcn: boolean;
  prettier: 'yes' | 'no';
  license: License;
}

export type SetupChoice = 'defaults' | 'reuse' | 'customize';
