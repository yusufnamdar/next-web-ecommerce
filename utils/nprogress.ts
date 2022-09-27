import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

let timer: NodeJS.Timeout

export function startProgressbar() {
  timer = setTimeout(function () {
    NProgress.start()
  }, 250) // only show progress bar if it takes longer than the delay
}

export function endProgressbar() {
  clearTimeout(timer)
  NProgress.done()
}
