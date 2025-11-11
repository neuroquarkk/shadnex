import kleur from 'kleur';
import { renderFilled } from 'oh-my-logo';

/**
 * Display the SHADNEX logo with a horizontal gradient.
 * The art is blocky to match the attached design.
 */
export async function displayLogo(): Promise<void> {
  await renderFilled("SHADNEX", { palette: "dawn" });

  console.log(kleur.dim('            The ultimate CLI for Next.js with Shadcn UI'));
  console.log();
}
