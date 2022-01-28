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
        def job = jenkins.model.Jenkins.instance.getItemByFullName("Job name")
        def result = job.getLastBuild().getResult().toString()
        env.result = result

        }
        sh '''npm run build 
npm start &
npm run cypress'''
      }
    }
    stage('Readme Status'){
      steps {
      sh '''
        node JenkinsScripts/readmeUpdate.js ${env.result}
      '''
      }
    }
  }
}