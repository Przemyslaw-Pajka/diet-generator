import React, { useState, createContext } from 'react';

export const MealStatesContext = createContext();

export const MealStatesProvider = (props) => {
    let [meal,setMeal] = useState({
        poniedzialek: {
            sniadanie: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            obiad: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            podwieczorek: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            kolacja: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            }
        },
        wtorek: {
            sniadanie: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            obiad: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            podwieczorek: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            kolacja: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            }
        },
        sroda: {
            sniadanie: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            obiad: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            podwieczorek: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            kolacja: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            }
        },
        czwartek: {
            sniadanie: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            obiad: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            podwieczorek: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            kolacja: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            }
        },
        piatek: {
            sniadanie: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            obiad: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            podwieczorek: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            kolacja: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            }
        },
        sobota: {
            sniadanie: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            obiad: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            podwieczorek: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            kolacja: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            }
        },
        niedziela: {
            sniadanie: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            obiad: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            podwieczorek: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            },
            kolacja: {
                nazwa:"Owsianka z suszonymi śliwkami",
                kcal:100,
                waga:325,
                wartosci:{b:15.30,t:15.30,w:15.30},
                skladniki:{skladnik1:'100 ml',skladnik2:'200 ml'}
            }
        }
    });

    return (
        <MealStatesContext.Provider value={[meal,setMeal]}>
            {props.children}
        </MealStatesContext.Provider>
    )
}

