<template>
  <div :class="{'event-card': true, 'reverseCard': reverseCard }">
    <article>
      <div class="header">
        <h3> {{ item.title }} </h3>
      </div>
      <div class="content">
        <p>
          {{ item.desc }}
        </p>
      </div>
      <div class="footer">
        <b>
          PLATS | <span> {{ item.location }} </span>
        </b>
        <b>
          KL | <span> {{ item.time }} </span>
        </b>
      </div>
    </article>
    <div class="timeline">
      <div class="date-section">
        <p> {{ date[0] }} {{ date[1] }} </p>
        <p>{{ date[2] }} </p>
      </div>
      <div class="line" />
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'

const props = defineProps({
  item: Object,
  reverseCard: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const date = moment(props.item.date).format('DD MMMM YYYY').split(' ')


</script>

<style scoped lang="scss">

    .reverseCard {
        flex-direction: row-reverse;
        margin-left: auto;
    }

    .event-card {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 87.2rem;
        min-height: 25rem;
        gap: 5rem;

        article {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 70rem;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            padding: 2rem 4rem;

            .header {
                border-bottom: 3px solid #d8d6c8;
                h3 {
                    text-transform: uppercase;
                    font-size: 2.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #c64533;
                    max-width: 60rem;
                }
            }

            .content {
                margin-top: 2rem;
                padding: 0 0 1rem 0;
            }

            .footer {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                gap: 1.5rem;
                font-size: 1.8rem;
                margin-top: auto;
                height: 10rem;

                span {
                    color:#5E6963;
                    font-weight: lighter;
                }
            }
        }

        .timeline {
            display: flex;
            flex-direction: column;
            align-items: center;

            .date-section {
                text-transform: uppercase;
                font-size: 2rem;
                font-weight: 500;
                color: #c64533;
                margin: 1rem 0 2rem 0;
                width: 11.51rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-weight: bold;

                p:nth-child(2)  {
                    color: #BDBBA4;
                }
            }

            .line {
                width: 0.3rem;
                height: calc(100% + 5rem);
                background-color: #32323270;
            }
        }
    }

  @media screen and (max-width: 1000px) {
      .reverseCard {
        margin-left: 4rem;
      }
      .event-card {
        flex-direction: row-reverse;
        margin-left: 4rem;
        gap: 2rem;
        article {
            padding: 1rem 2rem;
            margin: 0 2rem 2rem 0;
            .header {
                h3 {
                  font-size: 1.6rem;
                }
            }

            .content {
              p {
                font-size: 1.2rem;
              }
            }

            .footer {
              font-size: 1.4rem;
              height: 5em;
              gap: 1rem;
            }
        }

        .timeline {
            .date-section {
              font-size: 1.4rem;
                p:nth-child(2)  {
                }
            }

            .line {
            }
        }
    }
  }



  @media screen and (max-width: 1630px) {
    .event-card {
      flex-direction: row-reverse;
      margin: auto;
      margin-bottom: 5rem;
    }

    .reverseCard {
      margin: auto;
      margin-bottom: 5rem;
    }
  }

</style>
