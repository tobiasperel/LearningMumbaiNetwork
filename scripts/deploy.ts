import { ethers } from "hardhat";

async function main() {
  const helloworld = await ethers.getContractFactory('HelloWorld')  
  //const HelloWorld = await helloworld.attach('0x4becdd37a69912b5a9f280e612dd5ecb79e8b5bd') //en caso de deployarlo se pone deploy y no attach
  const HelloWorld = await helloworld.deploy()
  await HelloWorld.deployed() //solo si es un contrato que se deploya y el resto se comenta
  console.log(`The address is: ${HelloWorld.address}`);
  const tx = await HelloWorld.setMessage("Lionel Messi");
  await tx.wait();
  const message = await HelloWorld.getMessage();
  console.log(message);
  console.log("The message is: " + message);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
