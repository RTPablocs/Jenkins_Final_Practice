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
        def job = jenkins.model.Jenkins.instance.getItemByFullName("Job name")
        def result = job.getLastBuild().getResult().toString()
        env.result = result
      steps {
        sh '''npm run build 
npm start &
npm run cypress'''
      }
    }
    stage('Readme Status')
      sh '''
        node JenkinsScripts/readmeUpdate.js ${env.result}
      '''
  }
}