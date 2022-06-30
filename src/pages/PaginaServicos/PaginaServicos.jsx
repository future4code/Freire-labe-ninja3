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
} from "./style";
import { labeninjasURL, key } from "../../constants/labeninjasAPI";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { convertDate } from "../../utils/convertData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default class PaginaServicos extends React.Component {
  state = {
    jobs: [],
    filterJobs: [],
    minVal: "",
    maxVal: "",
    search: "",
    order: "",
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
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    deleteJob = (jobId) => {
    if(window.confirm("Você deseja excluir esse serviço?")) {    
        axios.
            delete(`${labeninjasURL}/jobs/${jobId}`, {
                headers: {
                    Authorization: key,
                }
            })
        .then((response) => {
            this.getAllJobs()
        })
        .catch((error) => {
            console.log(error)
        })
    }
  }

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
              <b>R${job.price.toFixed(2).replace('.', ',')}</b>
            </p>
            <Botoes>
              <Button
                onClick={() => this.props.mudarDePagina("detalhes", job.id)}
              >
                <b>
                  <GrAdd /> Ver detalhes
                </b>
              </Button>
              <Button
                onClick={() =>
                  this.props.adicionarAoCarrinho(job.id, job.title, job.price)
                }
              >
                <b>
                  Add ao Carrinho <MdOutlineAddShoppingCart />
                </b>
              </Button>
              <Button
                onClick={() => this.deleteJob(job.id)}
              >
                <b>
                    Excluir
                </b>

              </Button>
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
            label="Valor máximo"
            variant="outlined"
            value={this.state.maxVal}
            onChange={this.listMaxVal}
          />
          <CssTextField
            id="outlined-basic"
            label="Valor mínimo"
            variant="outlined"
            value={this.state.minVal}
            onChange={this.listMinVal}
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
        <Cards>{jobComponents}</Cards>
      </ContainerFather>
    );
  }
}
