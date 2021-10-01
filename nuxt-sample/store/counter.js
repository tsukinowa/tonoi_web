export const state = () => ({
  count: 0
})

export const mutations = {
  up (state) {
    // カウントアップ
    state.count += 1
  },
  down (state) {
    // カウントダウン
    state.count -= 1
  }
}

