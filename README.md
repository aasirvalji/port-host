## Aasir website

Simple portfolio website to test decentralized website hosting performance

### Setup website on IPFS network

Note: This was done using a react application. If you're using a different web framework or vanilla HTML/CSS/JS, some of these steps could differ for you

1. Add "homepage": "./" to your package.json
2. Push this change along with the rest of your code to a github repository
3. Sign up/Log in to [fleek](https://fleek.co/)
4. Click on the "add new website" button. Grant Fleek access to your Github. Select the repo with the website code you'd like to deploy. Grant Fleek permission to your repository
5. Fleek will now ask you how you want to deploy your code. If you're using React like me, you can select Fleek's create-react-app installation, leave all the other default installation settings as is (unless you want to change it for some reason) and hit deploy. This may take a few minutes.
6. Keep an eye out on the deployment logs. Once the deployment is done, you will see a fleek application URL and hash outputted. This means that your website has been successfully deployed using IPFS. You can access it using the application URL. If you'd like to connect this website to an NFT domain, you'll need to store the hash outputted by this deployment for later use. Otherwise, you're done :)

### Connect an NFT Domain to your IPFS hosted website

Note: This section assumes that you have setup your website on the IPFS network and are using Google Chrome. Before proceeding with this section, please read [Browser Compatability](#nft-domains-browser-compatability)

1. We will now setup our IPFS hosted website to be accessable through a domain connected to the blockchain. For this, got to [UnstoppableDomains](https://unstoppabledomains.com/) and create an account/log in.
2. Once logged in, got to my domains and select an existing domain you own OR purchase a new one and mint the domain. Minting publishes the domain on the blockchain and grants you full ownership of the domain. During the minting process, you will be asked to sign the transaction using a crypto wallet. You can use your existing cypto wallet OR create a new one with [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en). After signing these transactions, it may take a few minutes for Unstoppable domains to complete minting and propagate your changes.
3. After minting is completed, click on "manage domain" on your recently mminted domain, go to the website tab on the left of your screen, and input the IPFS hash we previously stored from our Fleek deployment logs.
4. Your website should be available through your NFT domain in minutes. \*Can only be accessed through the unstoppable browser or with the unstoppable domains extension

### Accessing the website

My minted domain can only be accessed with either the unstoppable browser or a browser with the unstoppable browser extension
domains: aasirvalji.blockchain, https://shrill-butterfly-1081.on.fleek.co/

### NFT domains browser compatability

The following is a list of compatible browsers or UnstoppableDomains NFT websites:

Opera has native support for desktop and mobile.
Brave has native support for desktop and mobile.
Google Chrome Extension (supports all Unstoppable Top Level Domains)
Firefox Extension (supports all Unstoppable Top Level Domains)
Unstoppable Browser (supports .crypto and .zil)

[Source](https://docs.unstoppabledomains.com/use-cases/support-ud-browser/)
