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
    sh 'echo $GITHUB_USER $GITHUB_TOKEN' // ejemplo de uso

                        git config --global user.email "jenkins@ci.com"
                        git config --global user.name "Jenkins CI"

                        # Eliminar si existe
                        rm -rf gh-pages

                        # Clonamos la rama gh-pages (si no existe Jenkins la crea)
                        git clone --branch gh-pages https://$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages || \
                        git clone https://$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages

                        cd gh-pages

                        # Creamos la rama si no existe
                        git checkout gh-pages || git checkout -b gh-pages

                        # Borramos archivos anteriores
                        rm -rf *

                        cd ..

                        # Copiamos los archivos generados en dist
                        cp -r dist/* gh-pages/

                        cd gh-pages
                        git add .
                        git commit -m "Deploy automático desde Jenkins" || echo "Nada que commitear"
                        git push https://$GITHUB_TOKEN@github.com/SamuelG30/Portafolio.git gh-pages
                    '''
                }
            }
        }
    }
}
