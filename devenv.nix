{ pkgs, ... }:

# See full reference at https://devenv.sh/reference/options/
{
  # https://devenv.sh/packages/
  packages = with pkgs; [ ];

  # https://devenv.sh/languages/
  languages.nix.enable = true;
  languages.python.enable = true;
  languages.python.poetry.enable = true;
  languages.typescript.enable = true;

  processes.mkdocs.exec = "mkdocs serve";
  processes.astro.exec = "yarn dev";

  pre-commit.hooks = {
    nixpkgs-fmt.enable = true;
    shellcheck.enable = true;
    # markdownlint.enable = true;
  };
  pre-commit.settings.markdownlint.config = {
    MD013 = {
      line_length = 120;
    };
    MD033 = false;
    MD034 = false;
  };
}
