## Questions and Answers

Our task is to build out and replace the API to support the Project Catwalk application. Our goal is to replace the existing API with a back end system that can support the full data set for the project and can scale to meet the demands of production traffic.

The Questions and Answers API for Project Catwalk is able to handle 240,000 requests per minute with an average of 63 ms response time and 0% error rate

![single]

Horizontally Scaled Servers

Structure:

![structured]

### Built With

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-20232A?style=for-the-badge&logo=postgresql&logoColor=blue)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![NGINX](https://img.shields.io/badge/Nginx-20232A?style=for-the-badge&logo=nginx&logoColor=green)
![AMAZON AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)


## Getting Started

### Prerequisites

* npm
  ```sh
  npm install
  ```
* Run server
  ```sh
  npm run start
  ```

## Usage

* GET /qa/questions Retrieves a list of questions for a particular product. This list DOES NOT include any reported questions.

## Contact

Kevin Gao: [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/kevinzhugao/)](https://www.linkedin.com/in/kevinzhugao/) [![GitHub: GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/kevinzhugao)](https://github.com/kevinzhugao)

Project Link: [https://github.com/team-beedle/questions-and-answers/](https://github.com/team-beedle/questions-and-answers/)

## Acknowledgments

* Loader.io
* New Relic
* K6



<!-- Images -->

[single]: images/single.png
[structured]: images/structured.png

