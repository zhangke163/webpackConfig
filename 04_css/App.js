import img from './1.png';
export default {
    template:`
    <div>
        <img :src='imgSrc' />
    </div>
    `,
    data(){
        return{
            imgSrc:img
        }
    }
}