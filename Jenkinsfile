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
                withCredentials([usernamePassword(
                    credentialsId: 'github-token',
                    usernameVariable: 'USER',
                    passwordVariable: 'TOKEN'
                )]) {
                    sh '''
                        git config --global user.email "jenkins@example.com"
                        git config --global user.name "Jenkins"

                        echo "→ Configurando Git con usuario y token"
                        git remote set-url origin https://${USER}:${TOKEN}@github.com/SamuelG30/Portafolio.git

                        echo "→ Instalando gh-pages"
                        npm install -g gh-pages

                        echo "→ Desplegando a GitHub Pages..."
                        gh-pages -d dist
                    '''
                }
            }
        }

    } // cierre stages
} // cierre pipeline
