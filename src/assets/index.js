
import {cartPiece} from './cart';
import {navPiece} from './navPiece';
import {pageP} from './pagePiece';


fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(data => {
                
                cartPiece(data);

                navPiece();

            })

                
