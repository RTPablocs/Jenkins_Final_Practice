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
        sh 'npm run dev &'
        script {
          env.CYPRESS = sh(script: "./node_modules/.bin/cypress run", returnStatus:true)
        }

      }
    }

    stage('Readme Status') {
      steps {
        sh """node JenkinsScripts/readmeUpdate.js ${env.CYPRESS} """
        sh 'chmod +x JenkinsScripts/Committer.sh'
        sh """./JenkinsScripts/Committer.sh ${params.Ejecutor} ${params.Motivo}"""
      }
    }

  }
    parameters {
    string(name: 'Ejecutor', description: 'Ejecutor')
    string(name: 'Motivo', description: 'Motivo')
    string(name: 'Correo', description: 'Correo')
  }
}