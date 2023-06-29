import { Product } from './Product';

export function ListOfProducts() {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-stone-300 w-full px-2 pt-6 pb-8 gap-7">
      <h1 className="text-black text-xl font-normal leading-7">
        Lista de Produtos
      </h1>

      <Product
        image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
        description={
          "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução"
        }
        price={225.9}
        discount={243.9}
        hiddenPrices
      />

      <Product
        image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg"
        description="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"
        price={299}
        hiddenPrices
      />

      <Product
        image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png"
        description="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"
        price={99.9}
        hiddenPrices
      />
    </div>
  );
}
