pipeline {
    agent any

    stages {

        stage('Build'){
        steps {
            sh "docker-compose build"
            }
        }

        stage('Run compose') {
            steps {
                sh "docker-compose up -d"
            }
        }

    }
}
