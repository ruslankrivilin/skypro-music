type Filterype = {
  title: string;
  value: "author" | "genre" | "order";
}

export const filters: Filterype[] = [

  {
    title: "исполнителю",
    value: "author"
  },
  
  {
    title: "жанру",
    value: "genre",
  },

  {
    title: "году выпуска",
    value: "order",
  }

]

export const order = ["По умолчанию", "Сначала новые", "Сначала старые"];