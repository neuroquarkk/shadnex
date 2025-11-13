import { spawnSync } from "child_process";

/**
 * Utility for running commands
 */
export function run(cmd: string, args: string[], silent: boolean = false, cwd?: string) {
  const result = spawnSync(cmd, args, {
    cwd,
    stdio: silent ? 'pipe' : 'inherit',
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error(`Command failed with exit code ${result.status}`);
  }
}
