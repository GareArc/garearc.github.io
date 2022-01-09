import {Options, Vue} from "vue-class-component";
import {particleOptions} from "@/themes/particle-options";

@Options({

})
export default class Home extends Vue {
  option = particleOptions;
}
