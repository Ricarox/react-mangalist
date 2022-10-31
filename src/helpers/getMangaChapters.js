

export const getMangaChapters = (chaptersNumber, lastView) => {
  

    const chapters = []

    //Siempre tiene que comenzar por el index 1
  for (let i = 1; i <= chaptersNumber; i++) {
    
    if (i<=lastView) {
        chapters.push({ idc: i, chapters: i, lastView: true })
      
    }else{
        chapters.push({ idc: i, chapters: i, lastView: false })
    }

  }
  
  return chapters.reverse();
}
