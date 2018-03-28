Page({
  data: {
    movies: [],
    page: 1,
    size: 6,
    loading: true
  },
  onLoad(){
    this.loadMovies()
  },
  loadMovies:function(){
    const { size, page } = this.data;
    this.setData({loading: true});

    wx.request({
      url: `https://www.newfq.com/doubanapi/v0/movie/list/?page=${page}&size=${size}`,
      success: (res) => {
        // console.log(res);
        const { data } = res.data;
        const movies = this.data.movies

        for(let i=0; i<data.length; i+=2){
          movies.push([data[i], data[i+1] ? data[i+1] : null])
        }

        this.setData({ movies, loading: false})
      }
    })
  },
  scrollHandler:function() {
    const { page } = this.data;
    this.setData({
      page: page + 1
    });
    this.loadMovies()
  },
  gotoDetail(e) {
    // console.log(e)
    const id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: "../movie-detail/movie-detail?id=" + id
    })
  }
})