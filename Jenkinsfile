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

  }
}