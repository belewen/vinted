import { headerCategories, TypeCategory } from '@/data/categoriesHeader';
import { Category } from './Category';
import { useCategories } from '@/hooks/useCategories';
import { SubCategories } from './SubCategories';
import React, { useEffect, useRef } from 'react';

export const Categories: () => JSX.Element = () => {
  const { selectedIdCategory, selectCategory } = useCategories();

  const refCategories = useRef();
  const [offsetSelectedCategory, setOffsetSelectedCategory] = React.useState(0);

  const activeCategory = headerCategories.find(
    (category: TypeCategory) =>
      category.subCategories && category.id === selectedIdCategory,
  );

  //Permet de connaitre la poisitin left de la div dans Category. Concerne la catégorie sélectionné par l'utilisateur
  useEffect(() => {
    const categoryElementDIV: HTMLDivElement | null =
      refCategories?.current?.querySelector(`#category-${selectedIdCategory}`);
    if (categoryElementDIV) {
      const divPosition = categoryElementDIV.getBoundingClientRect();

      const leftOffset = divPosition.left;
      setOffsetSelectedCategory(Math.floor(leftOffset));
    }
  }, [selectedIdCategory]);

  return (
    <div className="relative z-30">
      <nav
        ref={refCategories}
        className=" flex flex-row space-x-4 ml-32 mt-4 mb-2 text-vintedTextGrisFonce"
      >
        {/* Liste des catégories : Femmes Hommes Enfants etc... */}

        {headerCategories.map((category) => {
          return (
            <Category
              category={category}
              key={category.id}
              selectedIdCategory={selectedIdCategory}
              selectCategory={selectCategory}
            />
          );
        })}
      </nav>

      {/* Affichage des sous-catégories uniquement lorsque la catégorie est cliquée */}
      {activeCategory?.subCategories ? (
        <SubCategories
          offsetSelectedCategory={offsetSelectedCategory}
          subCategories={activeCategory.subCategories}
          key={activeCategory.id}
        />
      ) : null}
    </div>
  );
};
