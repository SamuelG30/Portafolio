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
            when {
                expression { currentBuild.currentResult == 'SUCCESS' }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-token', usernameVariable: 'GITHUB_USER', passwordVariable: 'GITHUB_TOKEN')]) {
                    sh '''
                        echo "Deploying to GitHub Pages as $GITHUB_USER"

                        # Configuración de Git
                        git config --global user.email "jenkins@ci.com"
                        git config --global user.name "Jenkins CI"

                        # Limpiar carpeta temporal
                        rm -rf gh-pages

                        # Clonar la rama gh-pages (si no existe, se crea)
                        git clone --branch gh-pages https://$GITHUB_USER:$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages || \
                        git clone https://$GITHUB_USER:$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages

                        cd gh-pages

                        # Crear la rama gh-pages si no existe
                        git checkout gh-pages || git checkout -b gh-pages

                        # Borrar archivos antiguos
                        rm -rf *

                        cd ..

                        # Copiar archivos de build
                        cp -r dist/* gh-pages/

                        cd gh-pages
                        git add .
                        git commit -m "Deploy automático desde Jenkins" || echo "Nada que commitear"

                        # Push usando el token
                        git push https://$GITHUB_USER:$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages
                    '''
                }
            }
        }
    }
}
