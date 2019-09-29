'use strict'
var Git = require("nodegit");
const fs = require('fs')
const rp = require('request-promise-native')
const readFilesFromGit = async(gitRepoName, folderName) => {
    try{ 
        Git.Clone(gitRepoName, "./gitRepos")
    const files = fs.readdirSync(`./gitRepos/${folderName}/`)
    const dataArray =  []
    console.log('files[i', files[0])
    for (var i in files) {
        if (files[i].includes('.json')) {
            console.log('includes json')
            const jsonFile = files[i]
            const fileData = fs.readFileSync(`./gitRepos/${folderName}/${jsonFile}`)
            dataArray.push(JSON.parse(fileData))
        }
    }
    console.log('dataArray', dataArray)
} catch(e){
    console.log('error in getting folder', e)
}
}

module.exports = {
    readFilesFromGit,
}

readFilesFromGit(`https://github.com/sreepadbhagwat/template_client`, 'project')