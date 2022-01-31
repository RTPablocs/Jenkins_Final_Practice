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
        script {
          env.CYPRESS = sh(script: "./node_modules/.bin/cypress run", returnStatus:true)
        }

        sh 'npm dev'
      }
    }

    stage('Readme Status') {
      steps {
        script {
          sh {node JenkinsScripts/readmeUpdate.js ${env.result}}
        }

      }
    }

  }
}