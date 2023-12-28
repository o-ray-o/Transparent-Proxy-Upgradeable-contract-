const { ethers, upgrades } = require("hardhat");

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.waitForDeployment();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.target
  );

  console.log("Proxy contract address: " + proxy.target);

  console.log("Implementation contract address: " + implementationAddress);
}

main();

// Proxy contract address: 0xbD240C2a5D5Fa9a60a079765139cCA9DBcfB03D4
// Implementation contract address: 0xE172753a14d132DbC9b82E229559D8726f6523d9
