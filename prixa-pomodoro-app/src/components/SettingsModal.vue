<template>
  <v-dialog :modal="modal" persistent max-width="600px">
    <v-card>
      <v-card-titles><span class="headline"> Settings </span></v-card-titles>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeModal"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modal: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
    save: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
