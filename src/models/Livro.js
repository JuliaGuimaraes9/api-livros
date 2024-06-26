import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"]
    //   enum: {[
    //     values: ["Casa do Código", "Alura", "Caelum"],
    //     message: "A editora deve ser uma das seguintes: {VALUE}"
    //   ]} - Serve para delimitar o campo e só poder aceitar o que estiver dentro dos conchetes
    },
    numeroPaginas: {
      type: Number,
      min: [10, "O número de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],	
      max: [5000, "O número de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;