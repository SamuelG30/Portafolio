pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to GitHub Pages') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
                    sh '''
                        git config --global user.email "jenkins@ci.com"
                        git config --global user.name "Jenkins CI"

                        # Clonamos la rama gh-pages
                        rm -rf gh-pages
                        git clone --branch gh-pages https://$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages

                        # Copiamos archivos de build
                        rm -rf gh-pages/*
                        cp -r dist/* gh-pages/

                        cd gh-pages
                        git add .
                        git commit -m "Deploy desde Jenkins"
                        git push https://$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages
                    '''
                }
            }
        }
    }
}
