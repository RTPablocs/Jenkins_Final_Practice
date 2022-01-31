pipeline {
  agent any
  stages {
    stage('Installation') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Cypress Testing') {
      steps {
        sh '''npm run build 
npm start &
npm run cypress'''
      }
    }

    stage('Readme Status') {
      steps {
        sh '''
        node JenkinsScripts/readmeUpdate.js ${env.result}
      '''
      }
    }

  }
  environment {
    Cypress = ''
  }
}