pipeline {
    agent any

    tools {
        nodejs "node20"
    }

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
            steps {
              withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
    sh '''
        git config --global user.email "jenkins@ci.com"
        git config --global user.name "Jenkins CI"

        rm -rf gh-pages
        git clone --branch gh-pages https://SamuelG30:$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages || \
        git clone https://SamuelG30:$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages

        cd gh-pages
        git checkout gh-pages || git checkout -b gh-pages
        rm -rf *

        cd ..
        cp -r dist/* gh-pages/

        cd gh-pages
        git add .
        git commit -m "Deploy automático desde Jenkins" || echo "Nada que commitear"
        git push https://SamuelG30:$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages
    '''
}

            }
        }
    }
}
