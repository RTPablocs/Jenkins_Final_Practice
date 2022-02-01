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
        script {
          env.LINTER = sh(script:'npm run lint', returnStatus: true)
        }
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
        script {
          env.README = sh(script:'node JenkinsScripts/readmeUpdate.js ${env.CYPRESS}', returnStatus:true)
        }
        sh 'chmod +x JenkinsScripts/Committer.sh'
        withCredentials([usernameColonPassword(credentialsId: 'github', variable: 'access')]){
          sh """./JenkinsScripts/Committer.sh ${access} ${params.Ejecutor} ${params.Motivo}"""
        }
      }
    }

    stage('Deployment'){
    steps{
        sh 'chmod +x ./JenkinsScripts/VercelDeploy.sh'
        withCredentials([string(credentialsId: 'vercelAuth', variable: 'auth')]) {
            script {
                env.VERCEL = sh(script:"./JenkinsScripts/VercelDeploy.sh ${auth}")
            }
            
        }
    }
}
    stage('Notification') {
      steps{
      withCredentials([usernamePassword(credentialsId: 'ionos-mailer-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
              sh """node JenkinsScripts/mailer.js $USERNAME $PASSWORD ${env.LINTER} ${env.CYPRESS} ${env.README} ${env.VERCEL}"""
            }
      }
}
  }
  parameters {
    string(name: 'Ejecutor', description: 'Ejecutor')
    string(name: 'Motivo', description: 'Motivo')
    string(name: 'Correo', description: 'Correo')
  }
}