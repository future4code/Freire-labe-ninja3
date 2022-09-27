import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import {
  ContainerFather,
  ContainerInput,
  Cards,
  BodyCards,
  JobCard,
  Data,
  Botoes,
  Button,
  CssTextField,
  ButtonDelete,
  ButtonCarrinho,
} from "./style";
import { labeninjasURL, key } from "../../constants/labeninjasAPI";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { convertDate } from "../../utils/convertData";
import { RiDeleteBin2Fill } from "react-icons/ri";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Loader from "../../components/Loader/Loader";

export default class PaginaServicos extends React.Component {
  state = {
    jobs: [],
    filterJobs: [],
    minVal: "",
    maxVal: "",
    search: "",
    order: "",
    loader: true,
  };

  componentDidMount() {
    this.getAllJobs();
    this.filterJobs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.minVal !== prevState.minVal ||
      this.state.maxVal !== prevState.maxVal ||
      this.state.search !== prevState.search ||
      this.state.order !== prevState.order
    ) {
      this.filterJobs();
    }
  }

  listMinVal = (ev) => {
    this.setState({ minVal: ev.target.value });
  };

  listMaxVal = (ev) => {
    this.setState({ maxVal: ev.target.value });
  };

  listSearch = (ev) => {
    this.setState({ search: ev.target.value });
  };

  listOrder = (ev) => {
    this.setState({ order: ev.target.value });
  };

  getAllJobs = () => {
    axios
      .get(`${labeninjasURL}/jobs`, {
        headers: {
          Authorization: key,
        },
      })
      .then((response) => {
        this.setState({
          jobs: response.data.jobs,
          filterJobs: response.data.jobs,
          loader: false,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteJob = (jobId) => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não será capaz de reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, Exclua!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${labeninjasURL}/jobs/${jobId}`, {
            headers: {
              Authorization: key,
            },
          })
          .then((response) => {
            Swal.fire("Excluido!", "Seu arquivo foi excluído.", "success");

            this.getAllJobs();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  filterJobs = () => {
    const max = this.state.maxVal ? Number(this.state.maxVal) : Infinity;
    const min = this.state.minVal ? Number(this.state.minVal) : -Infinity;

    const newJobs = this.state.jobs
      .filter((job) => job.price >= min)
      .filter((job) => job.price <= max)
      .filter((job) => {
        const jobTitle = job.title.toLowerCase();
        const jobDesc = job.description.toLowerCase();
        const searchText = this.state.search.toLocaleLowerCase();
        return jobTitle.includes(searchText) || jobDesc.includes(searchText);
      })
      .sort((a, b) => {
        switch (this.state.order) {
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor":
            return b.price - a.price;
          case "Titulo":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
        }
      });
    this.setState({ filterJobs: newJobs });
  };

  render() {
    const jobComponents = this.state.filterJobs.map((job) => {
      return (
        <BodyCards key={job.id}>
          <JobCard key={job.id} job={job}>
            <h3>{job.title}</h3>
            <Data>
              <b>Disponível até:</b>
              <br />
              <br />
              <b>{convertDate(job.dueDate)}</b>
            </Data>
            <p>
              <b>Valor: </b>
              <b>R${job.price.toFixed(2).replace(".", ",")}</b>
            </p>
            <Botoes>
              <Button
                onClick={() => this.props.mudarDePagina("detalhes", job.id)}
              >
                <b>
                  <GrAdd /> Detalhes
                </b>
              </Button>
              <ButtonCarrinho
                onClick={() =>
                  this.props.adicionarAoCarrinho(job.id, job.title, job.price)
                }
              >
                <b>
                  <MdOutlineAddShoppingCart />
                </b>
              </ButtonCarrinho>
              <ButtonDelete onClick={() => this.deleteJob(job.id)}>
                <b>
                  <RiDeleteBin2Fill />
                </b>
              </ButtonDelete>
            </Botoes>
          </JobCard>
        </BodyCards>
      );
    });

    return (
      <ContainerFather>
        <ContainerInput>
          <CssTextField
            id="outlined-basic"
            label="Busca por título"
            variant="outlined"
            value={this.state.search}
            onChange={this.listSearch}
          />
          <CssTextField
            id="outlined-basic"
            label="Valor mínimo"
            variant="outlined"
            value={this.state.minVal}
            onChange={this.listMinVal}
          />
          <CssTextField
            id="outlined-basic"
            label="Valor máximo"
            variant="outlined"
            value={this.state.maxVal}
            onChange={this.listMaxVal}
          />
          <FormControl sx={{ m: 0, minWidth: 250 }}>
            <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Ordenar"
              value={this.state.order}
              onChange={this.listOrder}
            >
              <MenuItem value={""}>Sem Ordenação</MenuItem>
              <MenuItem value={"Menor Valor"}>Menor Valor</MenuItem>
              <MenuItem value={"Maior Valor"}>Maior Valor</MenuItem>
              <MenuItem value={"Título"}>Título</MenuItem>
              <MenuItem value={"Prazo"}>Prazo</MenuItem>
            </Select>
          </FormControl>
        </ContainerInput>
        <Cards>
        {this.state.loader ? <Loader /> : ""}
          {jobComponents}
          </Cards>
      </ContainerFather>
    );
  }
}
