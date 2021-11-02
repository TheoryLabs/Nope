#!/usr/bin/env -S node -r ./bootstrap/index.js


(async () => {
    try {
        await console.log(`NOPE`)
        return {}
    }
    catch(err) {
        if(err.code) process.exitCode = err.code
        console.error(err)
        if(process.exitCode) {
            process.exit(process.exitCode)
        }
        throw err
    }
})()