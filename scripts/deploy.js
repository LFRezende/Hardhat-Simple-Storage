// imports
const { ethers, network, run } = require("hardhat");
// async
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("\nDeploying Contract ... \n");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`\nDeployed contract to: ${simpleStorage.address}  !!!\n`);
  console.log(network.config);
  // selecting only if network is not development
  if (network.config.chainId == 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("\n\n####Verifying...####\n\n!");
    await simpleStorage.deployTransaction.wait(6); //wait sometime before verifying
    await verify(simpleStorage.address, []);
  }
  // Getting some values
  const currentValue = await simpleStorage.retrieve();
  console.log(`Current value is: ${currentValue}`);

  // Updating:
  const transactionResponse = await simpleStorage.storeNumber("7");
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Value is: ${updatedValue}`);
}

async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified.");
    } else {
      console.log(e);
    }
  }
}
// main

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
