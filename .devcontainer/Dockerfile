# Should match use .nvmrc file which is used by netlify
FROM node:24.11.1

# Deno is required for netlify dev command and does not support latest, see README for more
# Deno VSC extension breaks vue volar, hence installing manually instead of as devcontainer feature
RUN curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.44.4 -y \
    && mv /root/.deno/bin/deno /usr/local/bin/deno