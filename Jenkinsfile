pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', credentialsId: '1552b8d3-c466-4e53-994d-75efa9af9bc7', url: 'https://github.com/sangeethSeneca/evistra-web.git'
            }
        }
        stage('Build') {
            // Add your build steps here
        }
        stage('Commit and Push') {
            steps {
                script {
                    git config user.email "dilipsinghkunwar@gmail.com"
                    git config user.name "dskunwar"
                    sh 'git add .'
                    sh 'git commit -m "Jenkins Test"'
                    sh 'git push origin master'
                }
            }
        }
    }
}
