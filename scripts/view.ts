import { ethers } from "hardhat";

async function main() {
    const helloworld = await ethers.getContractFactory("HelloWorld");
    const HelloWorld = await helloworld.attach(
        "0x12Da60fE2CCE3CD4df0F5Bc9Af670a4CCC2949D6"
    ); //en caso de deployarlo se pone deploy y no attach
    // await HelloWorld.deployed(); //solo si es un contrato que se deploya y el resto se comenta
    console.log(`The address is: ${HelloWorld.address}`);
    let message = await HelloWorld.getMessage();
    console.log(`The old message is: ${message}`);
    const tx = await HelloWorld.setMessage("Ortega");
    await tx.wait();
    message = await HelloWorld.getMessage();
    console.log(`The new message is: ${message}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
