# Tips to SimpleStorage in Hardhat

# Lembretes de operação hardhat

## Iniciar qualquer projeto:

- Yarn init
- yarn add --dev hardhat
- yarn hardhat
- (deploy.js) : const {ethers} = require("hardhat")
- yarn add --dev dotenv
-
- Colocar os RPC_Providers no .env:
  - const REDE_RPC_URL = process.env.REDE_RPC_URL;
  - no module.exports, insira dentro de networks
- require("dotenv").config(); onde precisar dos .envs

## Compilar qualquer projeto:

- yarn hardhat compile

- yarn hardhat run scripts/deploy.js --network hardhat (hardhat para rede de desenvolvimento)

- Quando for usar dotenv, sempre lembre de importá-lo ao projeto com _yarn add --dev dotenv_

- Se der pau, rode:

  - npm hardhat --verbose para localizar configs em outras pastas

- OBSERAÇÃO: SE DER PAU APAGUE ARTIFACTS E CACHE
  - yarn hardhat clean

## Verifying a contract

- Comand: yarn add --dev @nomiclabs/hardhat-etherscan
- Add to config: require("@nomiclabs/hardhat-etherscan");
- No config, setar os parâmetros de apiKey
- No env, colocar a chave de API
- No deploy, importar o run
- Setar em função async separada await run("verify:verify");
- SE QUISER, colocar teste de erro acima ^^^
- Na função main, multiplexar as redes caso seja hardhat ou outras
- SE OUTRAS, await simpleStorage.deployTransaction.wait(6) (esperar dar bom)
- await verify(simpleStorage.address, []);

## Working with yarn hardhat node

- yarn hardhat node
- Usually at http://127.0.0.1:8545/
- Create in config a new network (i.e. "localhost"), with:
  - url: http://127.0.0.1:8545/
  - (no accounts)
  - ChainId = 31337
- Then, just run yarn hardhat run scripts/deploy.js --network localhost para rodar o script na rede (mantenha-a ligada noutro terminal).

## Javascript/hardhat console

- yarn hardhat console --network CONSOLE

## Testing:

- PULEI TESTING FODASE VOLTAR AQUI QUANDO DER
