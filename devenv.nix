{ pkgs, config, ... }:

# See full reference at https://devenv.sh/reference/options/
{
  # https://devenv.sh/languages/
  languages.nix.enable = true;
  languages.typescript.enable = true;

  process.implementation = "process-compose";

  processes.nextjs.exec = "yarn dev";

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

  enterShell = ''
    ln -sf ${config.process-managers.process-compose.configFile} ${config.env.DEVENV_ROOT}/process-compose.yml
  '';

  # devenv.debug = true;
}
