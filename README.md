# Pokefusion Connector API
[<img src="https://deploy.stdlib.com/static/images/deploy.svg" width="192">](https://deploy.stdlib.com/)

This is the README for you API. It is intended to guide other developers on
**internal implementation** of your code, like how to set up a workflow project
or connector API. It **will not** be displayed in your
[Standard Library](https://stdlib.com/) documentation.

You can include an **Deploy to Build on Standard Library** button for GitHub,
as displayed above.

## About this API

This Pokefusion Connector API is a basic example of how to set up a Connector API using Build on Standard Library. You can use this template to deploy a basic Pokefusion API to your personal Standard Library account, which can then be used as a part of the [Build on Standard Library](https://build.stdlib.com/) interface on [build.stdlib.com](https://build.stdlib.com/).

This sample API has one endpoint, `__main__.js` which accepts two parameters, `headPokemon` and `bodyPokemon` for generating random fused Pokemon based on [pokemon.alexonsager.net](https://pokemon.alexonsager.net/).

### Deploying this Connector API

You can deploy this API instantly using the **Deploy on Standard Library** button:

[<img src="https://deploy.stdlib.com/static/images/deploy.svg" width="192">](https://deploy.stdlib.com/)

From here, you'll be brought to a screen that looks like this:

![Deploy Screen 1](./example/connector-pokefusion-1.png)

Click **Generate Identity** to create an Identity Token for this API. This is a necessary step when deploying any Workflow or Connector APIs to Standard Library. This token securely stores API credentials and environment variables.

The bottom of the screen will then change to:

![Deploy Screen 2](./example/connector-pokefusion-2.png)

Click **Deploy Project** to proceed. That's it! You'll be forwarded to the project management page when the Connector is deployed. From here, you can edit individual endpoints or open the API on [Code on Standard Library](https://code.stdlib.com/) to edit the code that powers your API.

### Modifying this API

### Using this API
