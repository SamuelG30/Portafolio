pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'NodeJS'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm: [
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/SamuelG30/Portafolio.git',
                        credentialsId: 'github-token'
                    ]]
                ]
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
                withCredentials([usernamePassword(
                    credentialsId: 'github-token',
                    usernameVariable: 'GIT_USERNAME',
                    passwordVariable: 'GIT_PASSWORD'
                )]) {
                    sh '''
                        echo "Deploying to GitHub Pages as $GIT_USERNAME"

                        git config --global user.email "jenkins@ci.com"
                        git config --global user.name "Jenkins CI"

                        # Clonar la rama gh-pages
                        rm -rf gh-pages
                        git clone --branch gh-pages https://$GIT_USERNAME:$GIT_PASSWORD@github.com/SamuelG30/Portafolio.git gh-pages
                        cd gh-pages
                        git checkout gh-pages || git checkout -b gh-pages

                        # Limpiar contenido antiguo
                        rm -rf *

                        # Copiar el build
                        cp -r ../dist/* .

                        # Commit y push
                        git add .
                        git commit -m "Deploy automático desde Jenkins" || echo "Nothing to commit"
                        git push https://$GIT_USERNAME:$GIT_PASSWORD@github.com/SamuelG30/Portafolio.git gh-pages
                    '''
                }
            }
        }
    }
}
