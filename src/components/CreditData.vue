<template>
  <div>
    <Title
      title="Cartão de crédito"
      class="mb-0"
    />
    <b-card class="font-weight-bold mb-3 form">
      <b-form>
        <b-form-group
          label="Número do cartão:"
          label-for="cardNumber"
          invalid-feedback="Campo Obrigatório"
          :state="(
            $v.ccNumber.$dirty &&
            (!$v.ccNumber.required || !$v.ccNumber.minLength)
          ) ? 'invalid' : 'valid'"
        >
          <b-form-input
            id="cardNumber"
            v-model.trim="$v.ccNumber.$model"
            v-mask="'####.####.####.####'"
            type="text"
            required
            placeholder="____.____.____.____"
          />
        </b-form-group>
        <b-form-group
          label="Nome do Titular:"
          label-for="name"
          invalid-feedback="Campo Obrigatório"
          :state="($v.name.$dirty && !$v.name.required) ? 'invalid' : 'valid'"
        >
          <b-form-input
            id="name"
            v-model.trim="$v.name.$model"
            type="text"
            required
            placeholder="Como no cartão"
          />
        </b-form-group>
        <b-form-row>
          <b-col cols="7">
            <b-form-group
              label="Validade (mês/ano):"
              label-for="dataCardValid"
              invalid-feedback="Campo Obrigatório"
              :state="(
                $v.dtValid.$dirty &&
                (!$v.dtValid.required || !$v.dtValid.minLength)
              ) ? 'invalid' : 'valid'"
            >
              <b-form-input
                id="dataCardValid"
                v-model.trim="$v.dtValid.$model"
                v-mask="'##/####'"
                type="text"
                required
                placeholder="__/____"
              />
            </b-form-group>
          </b-col>
          <b-col cols="5">
            <b-form-group
              label="CVV:"
              label-for="cvv"
              invalid-feedback="Campo Obrigatório"
              :state="(
                $v.cvv.$dirty &&
                (!$v.cvv.required || !$v.cvv.minLength)
              ) ? 'invalid' : 'valid'"
            >
              <b-form-input
                id="cvv"
                v-model.trim="$v.cvv.$model"
                v-mask="'###'"
                type="text"
                required
                placeholder="___"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import { mask } from 'vue-the-mask';
import Title from '@/components/Title.vue';

export default {
  name: 'CreditData',
  directives: { mask },
  components: { Title },
  mixins: [validationMixin],
  computed: {
    ...mapFields('Payment', ['ccNumber', 'name', 'dtValid', 'cvv']),
    invalid() {
      return this.$v.$invalid;
    },
  },
  validations: {
    ccNumber: {
      required,
      minLength: minLength(19),
    },
    name: {
      required,
    },
    dtValid: {
      required,
      minLength: minLength(7),
    },
    cvv: {
      required,
      minLength: minLength(3),
    },
  },
  watch: {
    invalid(newValue) {
      this.setDisable(newValue);
    },
  },
  methods: {
    ...mapActions('Payment', ['setDisable']),
  },
};
</script>
