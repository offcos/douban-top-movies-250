Page({
  data: {
    movies: [],
    page: 1,
    size: 6,
    loading: true,
    type: "无类型"
  },
  onLoad: function(options) {
    // console.log(options)
    const type = options.type
    this.setData({type})
    this.loadMovies()
  },
  loadMovies: function () {
    const { size, page, type } = this.data
    this.setData({ loading: true })

    wx.showLoading({
      title: '',
      mask: true
    })

    wx.request({
      url: `https://www.newfq.com/doubanapi/v0/movie/list/?type=${type}&page=${page}&size=${size}`,
      success: (res) => {
        console.log(res);
        const {data} = res.data;
        const movies = this.data.movies

        for (let i = 0; i < data.length; i += 2) {
          movies.push([data[i], data[i + 1] ? data[i + 1] : null])
        }

        this.setData({ movies, loading: false })

        wx.hideLoading()
      }
    })
  },
  scrollHandler: function () {
    const { page } = this.data;
    this.setData({
      page: page + 1
    });
    this.loadMovies()
  },
  gotoDetail(e) {
    // console.log(e)
    // const { movieData } = e.currentTarget.dataset
    // const { _id } = movieData
    const id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: "../movie-detail/movie-detail?id=" + id
    })
  }
})