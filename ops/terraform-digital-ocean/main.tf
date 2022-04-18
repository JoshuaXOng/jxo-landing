terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = "${var.do_token}"
}

resource "digitalocean_app" "jxo-landing" {
  spec {
    name   = "jxo-landing"
    region = "sgp"

    static_site {
      name          = "jxo-landing-static"
      build_command = "npm run build"
      output_dir    = "/dist"
      git {
        repo_clone_url = "https://github.com/JoshuaXOng/jxo-landing.git"
        branch         = "main"
      }
    }
  }
}
