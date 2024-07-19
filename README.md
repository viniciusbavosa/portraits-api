# Portraits - API

<div align="center">

  ![Static Badge](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/typescript-0B88F7?style=for-the-badge&logo=typescript&logoColor=0B88F7&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/fastify-A90FFB?style=for-the-badge&logo=fastify&logoColor=%FFF&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/zod-F58381?style=for-the-badge&logo=zod&logoColor=FFF&labelColor=black)
  ![JWT](https://img.shields.io/badge/JWT-EEE?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=FFF&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/dotenv-D0D302?style=for-the-badge&logo=.env&logoColor=D0D302&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/pnpm-EA902F?style=for-the-badge&logo=pnpm&logoColor=white&labelColor=black)

</div>

This is an REST API for the **[Portraits](https://github.com/viniciusbavosa/Portraits)** project. Developed with **[Node](https://nodejs.org/pt), [Typescript](https://www.typescriptlang.org/), [Fastify](https://fastify.dev/), [JWT](https://jwt.io/) and [ZOD](https://zod.dev/).**

This API allows dynamic uploading of pictures through a secure, authentication-protected route directly to the [Portraits](https://portraits-gamma.vercel.app/) website.

### Content

- [Installation](#installation)
- [How to use](#how-to-use)
- [License](#license)
- [Credits](#credits)


### How to use

1. Clone repo:

    - `git clone https://github.com/viniciusbavosa/portraits-api`

2. Install dependencies with pnpm

    - `pnpm install`

3. Set environment variables

    - Use .env-example in the repository root as an example
    - Create a .env file with the environment variables from .env-example  

4. Start application with pnpm -> `pnpm run dev`

5. Application will run on -> `http://localhost:3000/`
    - In case another port has been set, just change `3000` to the respective port;


### API Endpoint

This api provides two endpoints

| Endpoint              | HTTP Method           | Description                    |
| --------------------- | --------------------- | ------------------------------ |
| /signin               | POST                  | Loggin in                      |
| /images               | POST                  | Manipulate files               |

### Authentication 

You can set your own authentication by setting the `APP_SECRET` environment variable.

### License

This repository is licensed under the **MIT License**. Be sure to read and agree to the license terms before using its content.

### Credits

Thanks to [João Genari](https://github.com/genari-j) for his help during the development of this project and for providing the template for this README.